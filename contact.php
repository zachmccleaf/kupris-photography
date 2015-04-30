        <?php include 'inc/header.php' ?>
        <div class="container topborder">
	        <div class="contact">
	        	<div id="contact">
		        <h2>Contact</h2>
		            <form class="contactform" action="confirm.php" method="POST" enctype="multipart/form-data">
		                <div class="row">
		                    <input class="input" name="name" type="text" value="" size="30" placeholder="Who are you?" /><br />
		                </div>
		                <div class="row">
		                    <input class="input" name="email" type="text" value="" size="30" placeholder="How do I contact you?"/><br />
		                </div>
		                <div class="row">
		                    <textarea class="message" name="message" rows="7" cols="60" placeholder="How can I help?"></textarea><br />
		                </div>
		                 <button type="submit" name="send" class="callbutton contactbtn">Submit</button>
		            </form>                     
		        </div>
	        </div>
	    </div>
        <?php include 'inc/footer.php' ?>