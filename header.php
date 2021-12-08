<!doctype html>
<html <?php language_attributes(); ?> class="no-js loader-class">
<head>
	<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-XXXXXXXXXX-X');
	</script> -->

	<meta charset="<?php bloginfo('charset'); ?>">

	<?php if ( is_archive() ) { ?>
		<title><?php echo get_bloginfo( 'name' ); ?> - <?php the_archive_title(); ?></title>
	<?php } else { ?>
		<title><?php echo get_bloginfo( 'name' ); ?> - <?php the_title(); ?></title>
	<?php } ?>


  <link href="<?php echo get_template_directory_uri(); ?>/dist/images/favicon.png?v=4" rel="shortcut icon">
   <!-- <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed"> -->

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<div class="wrapper">
	<!-- ADD A PRE-LOADEDER -->
	<?php get_template_part( 'partials/_preloader'); ?>
	<header class="header" role="banner">
		<div class="content">
			<div class="header-logo">
				<a class="c-block-fill" href="/"></a>
				<img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo.svg" alt="<?php echo esc_attr( $image['alt'] ); ?>">
			</div>
			<!-- <nav class="main-nav mainNav" role="navigation">
				<?php main_theme_nav(); ?>
			</nav>
			<div class="mobile-menu menuToggle">
				<span class="hamTop"></span>
				<span class="hamMid"></span>
				<span class="hamBot"></span>
			</div> -->
		</div>
	</header>
