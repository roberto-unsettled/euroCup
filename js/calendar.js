$(document).ready(function() {
            
            $( ".numDrivers li" ).on( "click", function() {
                        var $this =                      $(this),
                            clase=                       $this.attr('class');
                        
                        var $padreId =                     $this.closest('.teamContainer').attr('id'),
                            $padre  =                     $('#'+$padreId);
                        
                        if(!$padre.find('.numDrivers').hasClass('oneDriver')){
                        
                        $padre.find('.numDrivers li span').removeClass('active');
                        
                        $this.find('span').addClass('active');
            
                        $padre.find(' .'+clase).removeClass('driverActive');
                        
                         $padre.find(' .driverActive').fadeOut( "fast", function() {
                                    
                                    $(this).removeClass('driverActive');
                                    
                                    $padre.find('.'+clase).fadeIn( "fast", function() {
                                                $padre.find('.driverOption.'+clase).addClass('driverActive');
                                    });
                        });
                        }
                        
            });
            
            $( "#menuCircuits li a" ).on( "click", function(event) {
                        event.preventDefault();
                        
                        var $this =                         $(this),
                            clase =                         $this.attr('class'),
                            $objetivo =                     $('#circuits li#'+clase);
                        
                        $('#circuits li.active').fadeOut( 500, function() {
                                    
                                    $(this).removeClass('active');
                                    
                                    $objetivo.fadeIn( 700, function() {
                                                $objetivo.addClass('active');
                                    });
                        });
                           
                        $('#menuCircuits li').removeClass('active');
                        $this.closest('li').addClass('active');
            
            });
});