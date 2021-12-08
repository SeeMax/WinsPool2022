<?php

/**
 * Hero Carousel Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'hero-carousel-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'hero-carousel-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
;?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">

    <div class="slick-prev-arrow">
      <svg version="1.1" viewBox="0 0 36.1 70.8">
        <polyline class="st0" points="35.7,0.4 0.7,35.4 35.7,70.4 "/>
      </svg>
    </div>
    <div class="slick-next-arrow">
      <svg version="1.1" viewBox="0 0 36.1 70.8">
        <polyline class="st0" points="0.4,70.4 35.4,35.4 0.4,0.4 "/>
      </svg>
    </div>

    <div class="hero-carousel-container heroCarouselContainer">
      <?php if( have_rows('hero_slides') ):?>
        <?php while ( have_rows('hero_slides') ) : the_row();?>
          <?php $headline = get_sub_field('headline');?>
          <?php $body = get_sub_field('body_copy');?>
          <?php $addBtn = get_sub_field('add_button');?>
          <?php $btnLabel = get_sub_field('button_label');?>
          <?php $btnDest = get_sub_field('button_destination');?>
          <?php $addImage = get_sub_field('add_image');?>
          <?php $image = get_sub_field('image');?>


          <div class="single-hero-carousel" data-postid="<?php echo $p->ID;?>">
            <div class="featured-hero-image-half c-width-40">
              
              <?php if($addImage == 'yes'):?>
                <img src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
              <?php endif;?>
            </div>
            <div class="featured-hero-text featured-hero-text-half c-width-60">
              <h1><?php echo $headline;?></h1>
              <?php if($body):?>
                <hr>
                <p><?php echo $body;?></p>
              <?php endif;?>
              <?php if($addBtn == 'yes'):?>
                <div class="seemax-button">
                  <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
                  <span><?php echo $btnLabel;?></span>
                </div>
              <?php endif;?>
              
            </div>
            
            
              
          </div>
      
        <?php endwhile;?>
      <?php endif;?>
    </div>

  </div>
</section>
