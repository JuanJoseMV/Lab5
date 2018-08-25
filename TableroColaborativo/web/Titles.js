/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        $(function() {

            causeRepaintsOn = $("h1, h2, h3, p");

            $(window).resize(function() {
                causeRepaintsOn.css("z-index", 1);
            });

        });
