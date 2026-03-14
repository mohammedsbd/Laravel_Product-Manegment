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
        $products = Product::latest()->get();
      
        return inertia('products/index', [
            'products' => $products,
            
        ]);
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
        try {

            $filename = null;
            $featuredImageOriginalName = null;

            if ($request->hasFile('featured_image')) {

                $featuredImage = $request->file('featured_image');

                // Get original name
                $featuredImageOriginalName = $featuredImage->getClientOriginalName();

                // Store file and get path
                $filename = $featuredImage->store('products', 'public');
            }

            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'featured_image' => $filename,
                'featured_image_original_name' => $featuredImageOriginalName,
            ]);

            if ($product) {
                return redirect()
                    ->route('products.index')
                    ->with('success', 'Product created successfully');
            }

            return redirect()
                ->back()
                ->with('error', 'Failed to create product');

        } catch (\Throwable $th) {

            return redirect()
                ->back()
                ->with('error', $th->getMessage());
        }
    }

    public function show(Product $product)
    {
        //
    }

    public function edit(Product $product)
    {
        //
    }

    public function update(Request $request, Product $product)
    {
        //
    }

    public function destroy(Product $product)
    {
        //
    }
}