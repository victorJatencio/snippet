import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-snippet-element',
  templateUrl: './snippet-element.component.html',
  styleUrls: ['./snippet-element.component.css']
})
export class SnippetElementComponent implements OnInit {

  elementTop = {
	title:'Top',
	text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	imagePath:'http://via.placeholder.com/230x200',
	code:`
    <div>
      <img alt="" height="200" src="http://via.placeholder.com/230x200" width="230" />
      <h4 class="h4" style="text-align:left;">Top</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    `
  };

  // To swap left and right classes for image position
  imagePos = {
  	'imgLeft' : false,
  	'imgRight': false,
  	'imgVisible': false,
  }

  // make ng-template visible
  imgVisible = false;

  // copy to clipboard function
  nodeName = document.querySelector('.snippet');
  copy = document.createRange();


  constructor() { }

  ngOnInit() {
  }

  onTop() {
  	this.elementTop.title = 'Top';
  	this.imagePos.imgRight = false;
  	this.imagePos.imgLeft = false;
  	this.imagePos.imgVisible = false;
    this.imgVisible = false;
    this.elementTop.code = `
    <div>
      <img alt="" height="200" src="http://via.placeholder.com/230x200" width="230" />
      <h4 class="h4" style="text-align:left;">Top</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>`;
  }
  onBottom(){
  	this.elementTop.title = 'Bottom';
  	this.imagePos.imgRight = false;
  	this.imagePos.imgLeft = false;
  	this.imagePos.imgVisible = true;
    this.imgVisible = !this.imgVisible;
    this.elementTop.code = `
    <div>
      <h4 class="h4" style="margin-bottom: 10px;text-align:left;">Bottom</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img alt="" height="200" src="http://via.placeholder.com/230x200" width="230" />
    </div>`;
  }
  onRight(){
  	this.elementTop.title = 'Right';
  	this.imagePos.imgRight = true;
  	this.imagePos.imgLeft = false;
  	this.imagePos.imgVisible = false;
    this.imgVisible = false;
    this.elementTop.code = `
    <table>
      <tbody>
        <tr>
          <td>
            <h4 class="h4">Right</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </td>
          <td>
            <img alt="" height="200" src="http://via.placeholder.com/230x200" width="230" />
          </td>
        </tr>
      </tbody>
    </table>
    `;
  }
  onLeft(){
  	this.elementTop.title = 'Left';
  	this.imagePos.imgLeft = true;
  	this.imagePos.imgRight = false;
  	this.imagePos.imgVisible = false;
    this.imgVisible = false;
    this.elementTop.code = `
    <table>
      <tbody>
        <tr>
          <td>
            <div>
            <img alt="" height="200" src="http://via.placeholder.com/230x200" width="230" />
            </div>
          </td>
          <td>
            <h4 class="h4">Left</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </td>
        </tr>
      </tbody>
    </table>
    `;
  }

  onCopy() {}


}
