<?php 
// tested on nginx and apache with php 7.1, 7.4
ini_set('display_errors', 0);
header('X-Created-With: Svelte JS');

// Polyfill for PHP 4 - PHP 7, safe to utilize with PHP 8

if (!function_exists('str_contains')) {
    function str_contains (string $haystack, string $needle)
    {
        return empty($needle) || strpos($haystack, $needle) !== false;
    }
} 

if (isset($_GET['w00t'])):
    if (is_array($_GET['w00t'])):
        $test = @array_shift(array_values($_GET['w00t']));

        if (strlen($test) > 50):
		if (str_contains($test, 'script')):
		var_dump($test);
		echo "flag";
		else:
		echo " <marquee> try harder :o </marquee> <br>";
		endif;
        else: // :(
            die;
        endif;
    endif;
    die;
else:
    if (!empty($_GET)):
        die; 
    endif;

    if (!empty($_POST)):
        die;
        
    endif;
    
 ?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>use the keys</title>

	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='global.css'>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai.min.css"></link>

	<script defer src='bundle.js'></script>
</head>

<body>
</body>
</html><?php endif; ?>
