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
$id = 'three-column-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'three-column-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}?>
<?php $backColor = get_field('background_color');?>
<section style="background:<?php echo $backColor;?>" id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <?php $scrollLink = get_field('scroll_link');?>
  <div class="content" id="<?php echo $scrollLink;?>">
    <?php if( have_rows('intro_col') ): ?>
      <?php while( have_rows('intro_col') ): the_row();?>
        <?php 
          $headline = get_sub_field('headline');
          $subHeadline = get_sub_field('sub_headline');
        ?>
        <div class="intro-col three-column-col">      
          <?php if($headline):?>
            <h3><?php echo $headline; ?></h3>
          <?php endif;?>
          <?php if($subHeadline):?>
            <h4><?php echo $subHeadline; ?></h4>
          <?php endif;?>
        </div>
      <?php endwhile; ?>  
    <?php endif; ?>
    <div class="three-col-group">
      <?php if( have_rows('left_col') ): ?>
        <?php while( have_rows('left_col') ): the_row();?>
          <?php 
            $headline = get_sub_field('headline');
            $body = get_sub_field('body_copy');
            $image = get_sub_field('image');
          ?>
          <div class="three-column-col left-col c-width-33-3">
            <?php if($image):?>
              <div class="col-image">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
              </div>
            <?php endif;?>
            <?php if($headline):?>
              <h5><?php echo $headline; ?></h5>
            <?php endif;?>
            <?php if($body):?>
              <p><?php echo $body; ?></p>
            <?php endif;?>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>

      <?php if( have_rows('middle_col') ): ?>
        <?php while( have_rows('middle_col') ): the_row();?>
          <?php 
            $headline = get_sub_field('headline');
            $body = get_sub_field('body_copy');
            $image = get_sub_field('image');
          ?>
          <div class="three-column-col middle-col c-width-33-3">        
            <?php if($image):?>
              <div class="col-image">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
              </div>
            <?php endif;?>
            <?php if($headline):?>
              <h5><?php echo $headline; ?></h5>
            <?php endif;?>
            <?php if($body):?>
              <p><?php echo $body; ?></p>
            <?php endif;?>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>

      <?php if( have_rows('right_col') ): ?>
        <?php while( have_rows('right_col') ): the_row();?>
          <?php 
            $headline = get_sub_field('headline');
            $body = get_sub_field('body_copy');
            $image = get_sub_field('image');
          ?>
          <div class="three-column-col right-col c-width-33-3">
            <?php if($image):?>
              <div class="col-image">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
              </div>
            <?php endif;?>
            <?php if($headline):?>
              <h5><?php echo $headline; ?></h5>
            <?php endif;?>
            <?php if($body):?>
              <p><?php echo $body; ?></p>
            <?php endif;?>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </div>
    <?php if( have_rows('ctas') ): ?>
      <?php while( have_rows('ctas') ): the_row();?> 
        <div class="cta-col three-column-col">
          <?php if( get_sub_field('add_ctas') == 'one' ||  get_sub_field('add_ctas') == 'two' ):?>
            <?php if( have_rows('cta_one') ): ?>
              <?php while( have_rows('cta_one') ): the_row();?> 
                <?php $ctaText = get_sub_field('cta_text');
                $ctaDest = get_sub_field('cta_destination');
              ?>
                <?php if($ctaText):?>
                  <div class="seemax-button">
                    <span><?php echo $ctaText; ?></span>
                    <a href="<?php echo $ctaDest; ?>" class="c-block-fill"></a>
                  </div>            
                <?php endif;?>
              <?php endwhile; ?>
            <?php endif; ?>                   
          <?php endif; ?>  
          <?php if( get_sub_field('add_ctas') == 'two' ):?>                 
            <?php if( have_rows('cta_two') ): ?>
              <?php while( have_rows('cta_two') ): the_row();?> 
                <?php $ctaText = get_sub_field('cta_text');
                $ctaDest = get_sub_field('cta_destination');
              ?>
                <?php if($ctaText):?>
                  <div class="seemax-button seemax-button-secondary">
                    <span><?php echo $ctaText; ?></span>
                    <a href="<?php echo $ctaDest; ?>" class="c-block-fill"></a>
                  </div>            
                <?php endif;?>
              <?php endwhile; ?>
            <?php endif; ?>  
          <?php endif; ?>  
        </div>
      <?php endwhile; ?>
    <?php endif; ?> 
  </div>  
</section>
