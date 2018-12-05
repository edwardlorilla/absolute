<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchaseorders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('po_number', 100);
            $table->string('pr_number', 100);
            $table->string('date_delivered', 100);
            $table->integer('source_id')->unsigned()->nullable();
            $table->foreign('source_id')->references('id')
                ->on('sources');
            $table->timestamps();
        });
        Schema::table('transactions', function (Blueprint $table) {
            /*$table->integer('purchaseorder_id')->unsigned()->nullable();
            $table->foreign('purchaseorder_id')->references('id')
                ->on('purchaseorders')->onDelete('cascade');*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchaseorders');
    }
}
