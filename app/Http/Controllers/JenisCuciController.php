<?php

namespace App\Http\Controllers;

use App\Models\JenisCuci;
use App\Http\Requests\StoreJenisCuciRequest;
use App\Http\Requests\UpdateJenisCuciRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisCuciController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchPaket = $request->query('searchPaket');
        $rowPerPage = $request->query('rowPerPage');
        if ($rowPerPage == null) {
            $rowPerPage = 5;
        }

        $pakets = JenisCuci::query();
        $pakets = $pakets->when(
            $searchPaket,
            fn ($query) =>
            $query->where('nama', 'like', '%' . $searchPaket . '%')
                ->orWhere('harga', 'like', '%' . $searchPaket . '%')
                ->orWhere('tipe', 'like', '%' . $searchPaket . '%')
        );

        $pakets = $pakets->latest()->paginate($rowPerPage)->withQueryString();
        return Inertia::render('Harmony/JenisCuci', compact('pakets'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJenisCuciRequest $request)
    {
        $request->validated();
        $jenisCuci = new JenisCuci();
        $jenisCuci->nama = $request->nama;
        $jenisCuci->harga = $request->harga;
        $jenisCuci->tipe = $request->tipe;
        $jenisCuci->keterangan = $request->keterangan;
        $jenisCuci->save();

        return back()->with('success', 'Data' . $jenisCuci->nama . ' berhasil ditambah!');
    }

    /**
     * Display the specified resource.
     */
    public function show(JenisCuci $jenisCuci)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JenisCuci $jenisCuci)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJenisCuciRequest $request, JenisCuci $jenisCuci)
    {
        $request->validated();
        $jenisCuci->update([
            'nama'  => $request->nama,
            'harga' => $request->harga,
            'tipe'  => $request->tipe,
            'keterangan'    => $request->keterangan,
        ]);

        return back()->with('success', 'Data' . $jenisCuci->nama . ' berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JenisCuci $jenisCuci)
    {
        $dataDelete = $jenisCuci;
        $jenisCuci->delete();
        return back()->with('success', 'Data ' . $dataDelete->nama . ' berhasil dihapus!');
    }
}
