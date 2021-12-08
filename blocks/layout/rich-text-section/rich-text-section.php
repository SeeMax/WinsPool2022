<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'rich-text-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'rich-text-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">
    
    <?php 
      $headline = get_field('headline');
      $body = get_field('rich_text');
      $ctaTex = get_field('cta_tex');
      $ctaDest = get_field('cta_dest');
    ?>  
    <?php if($headline):?>
      <h2><?php echo $headline; ?></h2>
    <?php endif;?>
    <?php echo $body;?>
    <?php if($ctaDest):?>  
      <div class="seemax-button">
        <span><?php echo $ctaText; ?></span>
        <a href="<?php echo $ctaDest; ?>" class="c-block-fill"></a>
      </div>
    <?php endif;?>          

  </div>
</section>
