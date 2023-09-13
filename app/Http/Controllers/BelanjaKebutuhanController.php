<?php

namespace App\Http\Controllers;

use App\Models\BelanjaKebutuhan;
use App\Http\Requests\StoreBelanjaKebutuhanRequest;
use App\Http\Requests\UpdateBelanjaKebutuhanRequest;
use Inertia\Inertia;

class BelanjaKebutuhanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kebutuhans = BelanjaKebutuhan::all();

        return Inertia::render('Harmony/BelanjaKebutuhan', compact('kebutuhans'));
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
    public function store(StoreBelanjaKebutuhanRequest $request)
    {
        $request->validated();

        $harga = str_replace('.', '', $request->harga);
        $total_pembelian = $harga * $request->qty;

        $belanjaKebutuhan = new BelanjaKebutuhan();
        $belanjaKebutuhan->id_dana_keluar = $request->id_dana_keluar;
        $belanjaKebutuhan->nama = $request->nama;
        $belanjaKebutuhan->qty = $request->qty;
        $belanjaKebutuhan->satuan = $request->satuan;
        $belanjaKebutuhan->harga = $harga;
        $belanjaKebutuhan->total_pembelian = $total_pembelian;
        $belanjaKebutuhan->keterangan = $request->keterangan;
        $belanjaKebutuhan->tanggal_pembelian = $request->tanggal_pembelian;
        $belanjaKebutuhan->save();

        return back()->with('success', 'Data ' . $belanjaKebutuhan->nama . ' berhasil ditambah!');
    }

    /**
     * Display the specified resource.
     */
    public function show(BelanjaKebutuhan $belanjaKebutuhan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BelanjaKebutuhan $belanjaKebutuhan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBelanjaKebutuhanRequest $request, BelanjaKebutuhan $belanjaKebutuhan)
    {
        $request->validated();

        $harga = str_replace('.', '', $request->harga);
        $total_pembelian = $harga * $request->qty;

        $belanjaKebutuhan->update([
            'nama' => $request->nama,
            'qty'   => $request->qty,
            'satuan'    => $request->satuan,
            'harga' => $harga,
            'total_pembelian'   => $total_pembelian,
            'keterangan'   => $request->keterangan,
            'tanggal_pembelian' => $request->tanggal_pembelian
        ]);

        return back()->with('success', 'Data ' . $belanjaKebutuhan->nama . ' berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BelanjaKebutuhan $belanjaKebutuhan)
    {
        $data = $belanjaKebutuhan;
        $belanjaKebutuhan->delete();

        return back()->with('success', 'Data ' . $data->nama . ' berhasil dihapus!');
    }
}
