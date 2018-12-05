<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('check');
            $table->integer('type'); // 1 = in, 0 = out
            $table->integer('completed')->default(1);; // 1 = true, 0 = false
            $table->integer('form_type')->default(0); // 1 = requisition, 0 = location
            $table->string('remarks')->nullable();
            $table->integer('supply_id')->unsigned()->nullable();
            $table->foreign('supply_id')->references('id')
                ->on('supplies')->onDelete('cascade');
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
        Schema::dropIfExists('tracks');
    }
}
