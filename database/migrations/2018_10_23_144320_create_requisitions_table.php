<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequisitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisitions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('source_id')->unsigned()->nullable();
            $table->foreign('source_id')->references('id')
                ->on('sources');

            $table->integer('division_id')->unsigned()->nullable();
            $table->foreign('division_id')->references('id')
                ->on('divisions');

            $table->integer('location_id')->unsigned()->nullable();
            $table->foreign('location_id')->references('id')
                ->on('locations');
            $table->string('office')->nullable();
            $table->string('responsibilities')->nullable();
            $table->string('code')->nullable();
            $table->timestamps();
        });
        Schema::create('requisition_supply', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('requisition_id')->unsigned()->nullable();
            $table->foreign('requisition_id')->references('id')
                ->on('requisitions')->onDelete('cascade');

            $table->integer('supply_id')->unsigned()->nullable();
            $table->foreign('supply_id')->references('id')
                ->on('supplies')->onDelete('cascade');
        });
        Schema::table('tracks', function (Blueprint $table) {
            $table->integer('requisition_id')->unsigned()->nullable();
            $table->foreign('requisition_id')->references('id')
                ->on('requisitions');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(['requisitions', 'requisition_supply']);
    }
}
