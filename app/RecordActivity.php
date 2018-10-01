<?php
/**
 * Created by PhpStorm.
 * User: Edward Lance Lorilla
 * Date: 9/27/2018
 * Time: 4:47 PM
 */

namespace App;


trait RecordActivity
{
    protected static function bootRecordActivity()
    {
        foreach (static::getActivityToRecord() as $event) {
            static::$event(function ($model) use ($event) {
                $model->recordActivity($event);
            });
        }
        static::deleting(function ($model) {
            $model->activity()->delete();
        });
    }

    protected static function getActivityToRecord()
    {
        return ['created', 'updated'];
    }

    protected function recordActivity($event)
    {
        $this->activity()->create([
            'user_id' => auth()->id(),
            'type' => $event . '_' . strtolower((new \ReflectionClass($this))->getShortName())
        ]);
    }

    public function activity()
    {
        return $this->morphMany('App\Activity', 'subject');
    }
}