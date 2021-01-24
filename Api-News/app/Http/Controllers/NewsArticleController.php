<?php

namespace App\Http\Controllers;

use App\Http\Services\NewsArticleService;
use App\Models\Category;
use App\Models\NewsArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsArticleController extends Controller
{
    protected $newsArticleService;

    public function __construct(NewsArticleService $newsArticleService)
    {
        $this->newsArticleService = $newsArticleService;
    }

    public function index()
    {
        $newsArticles = $this->newsArticleService->getAll();
        return response()->json($newsArticles, 200);
    }


    public function store(Request $request)
    {
        $newsArticle = new NewsArticle();
        $newsArticle->fill($request->all());
        $newsArticle->save();
        $statusCode = 201;
        if (!$newsArticle)
            $statusCode = 500;
        return response()->json($newsArticle, $statusCode);
    }

    public function show($id)
    {
        $newsArticle = NewsArticle::findOrFail($id);
        $statusCode = 200;
        if (!$newsArticle)
            $statusCode = 404;
        return response()->json($newsArticle, $statusCode);
    }

    public function update(Request $request, $id)
    {
        $newsArticle = NewsArticle::findOrFail($id);
        $statusCode = 200;
        if (!$newsArticle)
            $statusCode = 404;
        $newsArticle->fill($request->all());
        $newsArticle->save();
        return response()->json($newsArticle, $statusCode);
    }


    public function destroy($id)
    {
        $newsArticle = NewsArticle::findOrFail($id);
        $statusCode = 404;
        $message = "User not found";
        if ($newsArticle) {
            $newsArticle->delete();
            $statusCode = 200;
            $message = "Delete success!";
        }
        return response()->json($message, $statusCode);
    }

    public function search($key)
    {
        $newsArticles = DB::table('news_articles')->where('title', 'LIKE', '%' . $key . '%')->get();
        $statusCode = 200;
        if (!$newsArticles) {
            $statusCode = 404;
        }
        return response()->json($newsArticles, $statusCode);
    }
}
