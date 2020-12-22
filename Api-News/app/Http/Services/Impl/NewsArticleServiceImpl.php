<?php


namespace App\Http\Services\Impl;


use App\Http\Repositories\NewsArticleRepository;
use App\Http\Services\NewsArticleService;

class NewsArticleServiceImpl implements NewsArticleService
{
    protected $newsArticleRepository;

    public function __construct(NewsArticleRepository $newsArticleRepository)
    {
        $this->newsArticleRepository = $newsArticleRepository;
    }

    public function getAll()
    {
        $newsArticles = $this->newsArticleRepository->getAll();
        return $newsArticles;
    }

    public function findById($id)
    {
        $newsArticle = $this->newsArticleRepository->findById($id);
        $statusCode = 200;
        if (!$newsArticle)
            $statusCode = 404;
        $data = [
            'statusCode' => $statusCode,
            'newsArticles' => $newsArticle
        ];
        return $data;
    }

    public function create($request)
    {
        $newsArticle = $this->newsArticleRepository->create($request);
        $statusCode = 201;
        if (!$newsArticle)
            $statusCode = 500;
        $data = [
            'statusCode' => $statusCode,
            'newsArticle' => $newsArticle
        ];
        return $data;
    }

    public function update($request, $id)
    {
        $oldNewsArticle= $this->newsArticleRepository->findById($id);
        if (!$oldNewsArticle){
            $newsArticle = null;
            $statusCode = 404;
        } else {
            $newsArticle= $this->newsArticleRepository->update($request,$oldNewsArticle);
        }
        $data = [
          'statusCode'=>$statusCode,
          'newsArticle'=>$newsArticle
        ];
        return $data;
    }

    public function destroy($id)
    {
        $newsArticle = $this->newsArticleRepository->findById($id);

        $statusCode = 404;
        $message = "User not found";
        if ($newsArticle) {
            $this->newsArticleRepository->destroy($newsArticle);
            $statusCode = 200;
            $message = "Delete success!";
        }

        $data = [
            'statusCode' => $statusCode,
            'message' => $message
        ];
        return $data;
    }
}
