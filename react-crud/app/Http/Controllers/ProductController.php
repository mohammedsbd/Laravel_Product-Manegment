<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductFormRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return inertia('products/index', compact('products'));
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
        return inertia('products/product-form');

        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductFormRequest $request)
    {
        $featuredImage = null;

       if($request->file('featured_image')){
          $featuredImage = $request->file('featured_image');
          $featuredImageOriginalName = $featuredImage->getClientOriginalName();
          $featuredImage-> $featuredImage->store('products', 'public');
       }

       $product = Product::create([
           'name' => $request->name,
           'description' => $request->description,
           'price' => $request->price,
           'featured_image' => $filename,
           'featured_image_original_name' => $featuredImageOriginalName,
       ]);
     if($product){
        return redirect()->route('products.index')->with('success', 'Product created successfully');
     }

     return redirect()->back()->with('error', 'Failed to create product');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
