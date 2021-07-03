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
        return response()->json(PageTarget::withCount('targetRules')->paginate(10));
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

        $targetPage = PageTarget::create($data);

        $this->createTargetRule($request['target_rules'], $targetPage->id);

        $ruleRegexPatterns = $targetPage->targetRules()->select(DB::raw('group_concat(regex_pattern SEPARATOR "|") as regex_pattern'))->groupBy('instruction')->get();

        $target_rule = '';
        foreach($ruleRegexPatterns as $row) {
            $target_rule .= $row['regex_pattern'];
        }

        $targetPage->target_rule = $target_rule;
        $targetPage->save();

        return response()->json(['message' => 'Target Rule Created Successfully!', 'id' => $targetPage->id], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
        return response()->json(PageTarget::find($pageTargetID)->get(['target_rule', 'alert_message']));
    }
}
