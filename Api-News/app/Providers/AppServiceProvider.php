<?php

namespace App\Providers;

use App\Http\Repositories\CategoryRepository;
use App\Http\Repositories\Impl\CategoryRepositoryImpl;
use App\Http\Repositories\Impl\NewsArticleRepositoryImpl;
use App\Http\Repositories\NewsArticleRepository;
use App\Http\Services\CategoryService;
use App\Http\Services\Impl\CategoryServiceImpl;
use App\Http\Services\Impl\NewsArticleServiceImpl;
use App\Http\Services\NewsArticleService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->singleton(
            NewsArticleRepository::class,
            NewsArticleRepositoryImpl::class
        );
        $this->app->singleton(
            NewsArticleService::class,
            NewsArticleServiceImpl::class
        );
        $this->app->singleton(
            CategoryRepository::class,
            CategoryRepositoryImpl::class
        );
        $this->app->singleton(
            CategoryService::class,
            CategoryServiceImpl::class
        );
    }


    public function boot()
    {
        //
    }
}
