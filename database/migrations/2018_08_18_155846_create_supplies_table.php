<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuppliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplies', function (Blueprint $table) {
            $table->increments('id');
//            $table->string('supply_id', 30);
            $table->integer('type')->default(1); //0=office 1=medical supplies
            $table->string('name', 30);
            $table->integer('completed')->default(1); // 0 false, 1 true
            $table->string('description', 100)->nullable();
//            $table->string('code', 100)->nullable();
            $table->boolean('disabled')->default(false);
//            $table->integer('quantity')->unsigned()->default(0);
//            $table->integer('purchase_order')->unsigned();
//            $table->double('unit_cost')->nullable();
//            $table->integer('vat')->nullable();

//            $table->double('purchase_rate')->nullable();
//            $table->double('mrp_rate')->nullable();
//            $table->double('sale_rate')->nullable();
            $table->integer('reorder_point')->unsigned()->default(1);
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
        Schema::dropIfExists('supplies');
    }
}
