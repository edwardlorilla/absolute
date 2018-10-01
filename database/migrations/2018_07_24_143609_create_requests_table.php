<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('customer')->unsigned()->nullable();
            $table->foreign('customer')->references('id')
                ->on('users');
            $table->integer('doctor')->unsigned()->nullable();
            $table->foreign('doctor')->references('id')
                ->on('users');
            $table->string('request_date', 100);
            $table->string('request_year_code', 100);
            $table->string('remark', 100);
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requests');
    }
}
