<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('newsArticle')->group(function (){
    Route::get('/',[NewsArticleController::class,'index'])->name('newsArticle.index');
    Route::get('/{id}',[NewsArticleController::class,'show'])->name('newsArticle.show');
    Route::post('/',[NewsArticleController::class,'store'])->name('newsArticle.store');
    Route::put('/{id}',[NewsArticleController::class,'update'])->name('newsArticle.update');
    Route::delete('/{id}',[NewsArticleController::class,'destroy'])->name('newsArticle.destroy');
});
Route::prefix('category')->group(function (){
    Route::get('/',[CategoryController::class,'index'])->name('category.index');
    Route::get('/{id}',[CategoryController::class,'show'])->name('category.show');
    Route::post('/',[CategoryController::class,'store'])->name('category.store');
    Route::put('/{id}',[CategoryController::class,'update'])->name('category.update');
    Route::delete('/{id}',[CategoryController::class,'destroy'])->name('category.destroy');
});

