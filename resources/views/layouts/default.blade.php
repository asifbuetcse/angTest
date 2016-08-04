<!DOCTYPE html>
<html lang="en">
<head>
    @include('layouts.includes.styles')
    @include('layouts.includes.scripts')
</head>
<body>
    <div class="body-wrapper" ng-app="animeSquad">
        @include('layouts.includes.header')
            @yield('content')
    </div>
</body>
</html>