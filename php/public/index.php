<?php

require_once dirname(__DIR__) . '/vendor/autoload.php';

define('API_ROOT', dirname(__DIR__));

(new App\Services\Server\RouterService)->exec();
