<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('type')->unsigned();
            $table->integer('out_quantity')->unsigned();
            $table->integer('product_id')->unsigned()->nullable();
            $table->foreign('product_id')->references('id')
                ->on('products')->onDelete('cascade');;
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')
                ->on('users');
            $table->timestamps();
        });
        Schema::create('request_transaction', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('request_id')->unsigned()->nullable();
            $table->foreign('request_id')->references('id')
                ->on('requests')->onDelete('cascade');

            $table->integer('transaction_id')->unsigned()->nullable();
            $table->foreign('transaction_id')->references('id')
                ->on('transactions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
