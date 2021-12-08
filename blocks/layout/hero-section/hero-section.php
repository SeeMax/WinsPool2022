<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'hero-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'hero-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  $image = get_field('background_image');
  $headline = get_field('headline') ?: strtoupper(get_the_title());
  $subHeadline = get_field('sub_headline');
  $body = get_field('body');
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <?php if($image):?>
    <div class="hero-image">
      <img src="<?php echo $image['url'];?>" alt="<?php echo esc_attr( $image['alt'] ); ?>">
    </div>
  <?php endif; ?>
  <?php if(get_field('headline')):?>
    <div class="c-block-fill hero-color-overlay"></div>
  <?php endif;?>
  <div class="content">
    <?php if(get_field('headline')):?>
      <h1><?php echo $headline; ?></h1>
    <?php endif;?>
    <?php if(get_field('sub_headline')):?>
      <h4><?php echo $subHeadline; ?></h4>
    <?php endif;?>
    <?php if(get_field('body')):?>
      <?php echo $body; ?>
    <?php endif;?>
    <?php $pageSlug = esc_html( get_page_template_slug( $post->ID ) ); ?>
  </div>
</section>
