<?php

require_once dirname(__DIR__) . '/vendor/autoload.php';

(new App\Services\Server\RouterService)->exec();
