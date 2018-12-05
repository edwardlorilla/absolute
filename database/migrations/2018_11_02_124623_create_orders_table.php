<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->unsignedInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('subject_type', 100);
            $table->string('po_number', 100)->nullable();
            $table->string('pr_number', 100)->nullable();
            $table->string('date_delivered', 100);
            $table->integer('division_id')->unsigned()->nullable();
            $table->foreign('division_id')->references('id')
                ->on('divisions');
            $table->integer('source_id')->unsigned()->nullable();
            $table->foreign('source_id')->references('id')
                ->on('sources');
            $table->unsignedInteger('subject_id');
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
        Schema::dropIfExists('orders');
    }
}
