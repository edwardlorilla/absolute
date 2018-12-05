<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
//            $table->string('po_number', 100)->nullable();
//            $table->string('pr_number', 100)->nullable();
//            $table->integer('product_id');
            $table->string('medication', 100);
            $table->string('dosage', 100);
//            $table->string('name', 30);
            $table->boolean('disabled')->default(false);
//            $table->integer('vat')->nullable();
//            $table->double('purchase_rate')->nullable();
//            $table->double('discount')->nullable();
//            $table->double('mrp_rate')->nullable();
//            $table->double('sale_rate')->nullable();
//            $table->integer('reorder_point')->unsigned();
            $table->integer('package_id')->unsigned()->nullable();
            $table->integer('category_id')->unsigned()->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('package_id')->references('id')->on('packages');
            $table->timestamps();
        });
        Schema::table('packs', function($table)
        {
//            $table->unsignedInteger('product_id');
//            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        Schema::table('packs', function (Blueprint $table) {
            $table->dropColumn('product_id');
        });
    }
}
