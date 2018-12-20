<?php
namespace App\Helper;

use Validator;

trait DataViewer
{

    protected $operators = [
        'equal' => '=',
        'not_equal' => '<>',
        'less_than' => '<',
        'greater_than' => '>',
        'less_than_or_equal_to' => '<=',
        'greater_than_or_equal_to' => '>=',
        'in' => 'IN',
        'like' => 'LIKE'
    ];

    public function scopeSearchPaginateAndOrder($query)
    {


        $queries = [];
        $request = app()->make('request');
        $v = Validator::make($request->only([
            'column', 'direction', 'per_page',
            'search_column', 'search_operator', 'search_input'
        ]), [
            'column' => 'alpha_dash|in:' . implode(',', array_column(self::$columns, 'id')),
            'direction' => 'in:asc,desc',
            'per_page' => 'integer|min:1',
            'search_column' => 'alpha_dash|in:' . implode(',', array_column(self::$columns, 'id')) . ',all',
            'search_operator' => 'alpha_dash|in:' . implode(',', array_keys($this->operators)),
            'search_input' => 'max:255'
        ]);
        if ($v->fails()) {
            throw new \Illuminate\Validation\ValidationException($v);
        }

        if ($request->has('column') && $request->has('direction')) {
            $query = $query->orderBy($request->column, $request->direction);
            $queries['column'] = request('column');
            $queries['direction'] = request('direction');
        }else {
            $query = $query->orderBy('updated_at', 'desc');
        }


        if ($request->search_column) {
            $query = $query->where(function ($query) use ($request) {
                if ($request->has('search_input') && $request->search_input) {
                    if ($request->search_operator == 'in' && $request->search_column != 'all') {
                        $query->whereIn($request->search_column, explode(',', $request->search_input));
                    } else if ($request->search_operator == 'like' && $request->search_column != 'all') {
                        $query->where($request->search_column, 'LIKE', '%' . $request->search_input . '%');
                    } else if ($request->search_column == 'all') {
                        foreach (array_column(self::$columns, 'id') as $keyword) {
                            if ($request->search_operator == 'like') {
                                $query = $query->orWhere($keyword, 'LIKE', '%' . $request->search_input . '%');
                            } else if ($request->search_operator == 'in') {
                                $query = $query->orWhereIn($keyword, explode(',', $request->search_input));
                            } else {
                                $query = $query->orWhere($keyword, $this->operators[$request->search_operator], $request->search_input);
                            }
                        }
                    } else {
                        $query->where($request->search_column, $this->operators[$request->search_operator], $request->search_input);
                    }
                }
            });
        }

        return $queries ? $query->paginate($request->per_page)->appends($queries) : $query->paginate($request->per_page);
    }
}