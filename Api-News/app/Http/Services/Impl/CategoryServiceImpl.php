<?php


namespace App\Http\Services\Impl;


use App\Http\Repositories\CategoryRepository;
use App\Http\Services\CategoryService;

class CategoryServiceImpl implements CategoryService
{
protected $categoryRepository;
public function __construct(CategoryRepository $categoryRepository)
{
    $this->categoryRepository=$categoryRepository;
}

    public function getAll()
    {
        $categories = $this->categoryRepository->getAll();
        return $categories;
    }

    public function findById($id)
    {
        $category = $this->categoryRepository->findById($id);
        $statusCode = 200;
        if (!$category){
            $statusCode=404;
        }
        $data = [
            'statusCode'=>$statusCode,
            'categories'=>$category
        ];
        return $data;
    }

    public function create($request)
    {
        $category = $this->categoryRepository->create($request);
        $statusCode= 201;
        if (!$category){
            $statusCode=500;
        }
        $data = [
            'statusCode'=>$statusCode,
            'categories'=>$category
        ];
        return $data;
    }

    public function update($request, $id)
    {
        $oldCategory = $this->categoryRepository->findById($id);
        if (!$oldCategory){
            $newCategory = null;
            $statusCode = 404;
        } else{
            $newCategory = $this->categoryRepository->update($request,$oldCategory);
            $statusCode=200;
        }
        $data = [
            'statusCode'=>$statusCode,
            'categories'=>$newCategory
        ];
            return $data;
    }

    public function destroy($id)
    {
       $category = $this->categoryRepository->findById($id);
       $statusCode = 404;
       $message = "Category not found";
       if ($category){
           $this->categoryRepository->destroy($category);
           $statusCode=200;
           $message="Delete success!";
       }
       $data = [
           'statusCode'=>$statusCode,
           'message'=>$message
       ];
       return $data;
    }
}
