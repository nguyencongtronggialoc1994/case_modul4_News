<?php

namespace App\Http\Controllers;

use App\Http\Services\CategoryService;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
//    protected $categoryService;
//    public function __construct(CategoryService $categoryService)
//    {
//        $this->categoryService=$categoryService;
//    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $categories = Category::all();
        return response()->json($categories,200);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
       $category = new Category();
       $category->fill($request->all());
       $category->save();
       $statusCode = 201;
       if (!$category)
           $statusCode=404;
        return response()->json($category,$statusCode);
    }


    public function show($id)
    {
        $category = Category::findOrFail($id);
        $statusCode = 200;
        if (!$category)
            $statusCode=404;
        return response()->json($category,$statusCode);
    }


    public function edit(Category $category)
    {
        //
    }


    public function update(Request $request,$id)
    {
        $category = Category::findOrFail($id);
        $statusCode=200;
        if (!$category)
            $statusCode=404;
        $category->fill($request->all());
        $category->save();
        return response()->json($category,$statusCode);
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $message = "User not found";
        $statusCode = 404;
        if ($category){
            $category->delete();
            $message="delete success";
            $statusCode =200;
        }
        return response()->json($message,$statusCode);
    }
}
