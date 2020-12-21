<?php

namespace App\Http\Controllers;

use App\Http\Services\NewsArticleService;
use App\Models\NewsArticle;
use Illuminate\Http\Request;

class NewsArticleController extends Controller
{
    protected $newsArticleService;
    public function __construct(NewsArticleService $newsArticleService)
    {
        $this->newsArticleService=$newsArticleService;
    }

    public function index()
    {
        $newsArticles = $this->newsArticleService->getAll();
        return response()->json($newsArticles,200);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $dataNewsArticle = $this->newsArticleService->create($request->all());
        return response()->json($dataNewsArticle['newsArticle'],$dataNewsArticle['statusCode']);
    }

    public function show($id)
    {
        $dataNewsArticle = $this->newsArticleService->findById($id);
        return response()->json($dataNewsArticle['newsArticle'],$dataNewsArticle['statusCode']);
    }


    public function edit(NewsArticle $newsArticle)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $dataNewsArticle = $this->newsArticleService->update($request->all(),$id);
        return response()->json($dataNewsArticle['newsArticle'],$dataNewsArticle['statusCode']);
    }


    public function destroy($id)
    {
        $dataNewsArticle = $this->newsArticleService->destroy($id);
        return response()->json($dataNewsArticle['message'],$dataNewsArticle['statusCode']);
    }
}
