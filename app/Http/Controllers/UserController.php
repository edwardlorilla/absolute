<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = User::searchPaginateAndOrder();
        $columns = User::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    public function create()
    {
        $roles = \App\Role::with('permissions')->get();

        return response()->json(['roles' => $roles], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $input = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . (int)$request->id,
            'address' => '',
            'phone' => '',
            'password' => 'min:6',
            'confirm_password' => 'same:password',
        ]);
        if (trim($request->password) == '') {
            $input = $request->except('password');
        } else {
            $input['password'] = bcrypt($request->password);
        }

        $model = User::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        if ($request->roles) {
            $model->syncRoles($request->roles);
        }
        /*if ($request->permissions) {
            $model->syncPermissions($request->permissions);
        }*/
        return response()->json($model, 201);
    }

    public function sign(Request $request)
    {
        $request->validate([
            'file' => 'file',
            'photo' => ''
        ]);
        $input = $request->all();
        if ($file = $request->file('file')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('storage/images', $name);
            $input['file'] = $name;
        }

        $user = auth()->user();
        $user->file = $input['file'];
        $user->save();
        if (!(empty($request->photo))) {
            if (file_exists(public_path() . '/storage/images/' . $request->photo)){
                unlink(public_path() . '/storage/images/' . $request->photo);
            }
        }
        return response()->json($user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $roles = \App\Role::all();
        $permissions = \App\Permission::all();
        return response()->json(['user' => User::where('id', $user->id)->with('roles', 'permissions')->first(), 'roles' => $roles, 'permissions' => $permissions], 200);
    }

    public function edit(User $user)
    {
        return response()->json($user, 200);
    }

    public function notification(User $user){
        return response()->json($user->unreadNotifications()->paginate());
    }
    public function markAsRead(){
        return response()->json(auth()->user()->notifications()->paginate());
    }
    public function notificationMarkAsRead($id){
        return response()->json(auth()->user()->unreadNotifications()->whereId($id)->update(['read_at' => now()]));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'old_password' => 'required',
            'new_password' => 'required|min:6',
            'confirm_password' => 'required|same:new_password',
        ]);
        $data = $request->all();
        if (!Hash::check($data['old_password'], $user->password)) {
            return response()->json('The specified password does not match the database password', 500);
        } else {
            return response()->json($user->update(['password' => bcrypt($request->new_password)]), 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
