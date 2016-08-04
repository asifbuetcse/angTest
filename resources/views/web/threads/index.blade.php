@extends('layouts.default')

@section('content')

    <div class="main-content column-left" ui-view="left">
    </div>
    <div class="main-content detail-right" ui-view="right">
    </div>

    <div ng-controller="ThreadsController">
		@{{ firstName + " " + lastName }}
	</div>

<script>

@stop


@section('script')
    {!! Html::script('/assets/angular/modules/threads.js') !!}
@stop






