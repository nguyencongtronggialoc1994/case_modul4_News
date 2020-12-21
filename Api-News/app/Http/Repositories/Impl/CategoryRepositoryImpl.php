<?php


namespace App\Http\Repositories\Impl;


use App\Http\Repositories\Category;
use App\Http\Repositories\Eloquent\EloquentRepository;

class CategoryRepositoryImpl extends EloquentRepository implements Category
{

    public function getModel()
    {
        $model = Category::class;
        return $model;
    }
}
