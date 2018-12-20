<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDivisionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->string('name', 100);
            $table->string('station', 100);
            $table->timestamps();
        });
        Schema::table('requests', function (Blueprint $table) {
            $table->integer('division_id')->unsigned()->nullable();
            $table->foreign('division_id')->references('id')
                ->on('divisions');
        });
        Schema::table('tracks', function (Blueprint $table) {
            $table->integer('division_id')->unsigned()->nullable();
            $table->foreign('division_id')->references('id')
                ->on('divisions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('divisions');
    }
}
