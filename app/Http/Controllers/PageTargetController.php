<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageTargetRequest;
use App\Models\PageTarget;
use App\Traits\TargetRuleTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class PageTargetController extends Controller
{
    use TargetRuleTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(PageTarget::latest()->withCount('targetRules')->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageTargetRequest $request)
    {
        $data = Arr::except($request->validated(), 'target_rules');

        $pageTarget = PageTarget::create($data);

        $this->createTargetRule($request['target_rules'], $pageTarget);

        $pageTarget->setPageRuleRegex();

        return response()->json(['message' => 'Target Rule Created Successfully!', 'id' => $pageTarget->id], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PageTarget  $pageTarget
     * @return \Illuminate\Http\Response
     */
    public function show(PageTarget $pageTarget)
    {
        return response()->json($pageTarget->load('targetRules'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PageTarget  $pageTarget
     * @return \Illuminate\Http\Response
     */
    public function edit(PageTarget $pageTarget)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PageTargetRequest $request, PageTarget $pageTarget)
    {
        $data = Arr::except($request->validated(), 'target_rules');

        $targetPage = $pageTarget->update($data);

        $this->createTargetRule($request['target_rules'], $pageTarget);

        $pageTarget->setPageRuleRegex();

        return response()->json(['message' => 'Target Rule Updated Successfully!', 'id' => $pageTarget->id], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function fetchPattern($pageTargetID)
    {
        return response()->json(PageTarget::select(['target_rule', 'alert_message'])->find($pageTargetID));
    }
}
