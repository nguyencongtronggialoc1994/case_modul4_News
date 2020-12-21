<?php
namespace App\Http\Repositories\Impl;

use App\Http\Repositories\Eloquent\EloquentRepository;
use App\Http\Repositories\NewsArticleRepository;
use App\Models\NewsArticle;

class NewsArticleRepositoryImpl extends EloquentRepository implements NewsArticleRepository
{

    public function getModel()
    {
        $model = NewsArticle::class;
        return $model;
    }
}
