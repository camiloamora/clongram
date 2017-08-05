var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');


module.exports = function (pictures){
		var el = yo`<div class="container timeline">
		<div  class="row">
			<div class="col s12 m10 offset-m1 lg8 offset-12 center-align">
				<form enctype="multipart/form-data" class="form-upload">
					<div id="fileName" class="fileUpload btn btn-flat cyan">
					<span><i class="fa fa-camera-retro" aria-hidden="true"></i>
 ${translate('upload-picture')}</span>
 					<input name="picture" id="file" type="file" class="upload"/>
					</div>
					<button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
					<button 
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 offset-m1 l6 offset-l3">
			${pictures.map(function (pic){
				return picture(pic)	;
			})}
			</div>
		</div>
	</div>`;

	return layout(el);
	
}

