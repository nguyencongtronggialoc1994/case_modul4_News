<?php


namespace App\Http\Repositories\Impl;


use App\Http\Repositories\CategoryRepository;
use App\Http\Repositories\Eloquent\EloquentRepository;

class CategoryRepositoryImpl extends EloquentRepository implements CategoryRepository
{

    public function getModel()
    {
        $model = CategoryRepository::class;
        return $model;
    }
}
