<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sources', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->integer('type')->nullable(); //type= medicine = 0 'supply 1
            $table->timestamps();
        });
        /*Schema::table('transactions', function (Blueprint $table) {
            $table->integer('source_id')->unsigned()->nullable();
            $table->foreign('source_id')->references('id')
                ->on('sources')->onDelete('cascade');
        });*/

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sources');
    }
}
