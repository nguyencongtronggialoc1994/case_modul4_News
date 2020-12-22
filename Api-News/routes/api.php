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
Route::prefix('newsArticles')->group(function () {
    Route::get('/', [NewsArticleController::class, 'index']);
    Route::get('/{id}', [NewsArticleController::class, 'show']);
    Route::post('/', [NewsArticleController::class, 'store']);
    Route::put('/{id}', [NewsArticleController::class, 'update']);
    Route::delete('/{id}', [NewsArticleController::class, 'destroy']);
});

Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{id}', [CategoryController::class, 'show']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::put('/{id}', [CategoryController::class, 'update']);
    Route::delete('/{id}', [CategoryController::class, 'destroy']);

});

