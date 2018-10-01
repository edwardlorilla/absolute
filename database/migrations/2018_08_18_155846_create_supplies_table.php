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
            $table->string('supply_id', 30);
            $table->string('name', 30);
            $table->boolean('disabled')->default(false);
            $table->integer('quantity')->unsigned();;
            $table->integer('purchase_order')->unsigned();
            $table->integer('vat')->nullable();
            $table->double('purchase_rate')->nullable();
            $table->double('discount')->nullable();
            $table->double('mrp_rate')->nullable();
            $table->double('sale_rate')->nullable();
            $table->integer('reorder_point')->unsigned();
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
