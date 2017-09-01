import React, { Component } from 'react';

const PostEditor = (props) => (
    <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
            <button className="btn btn-success post-editor-button" onClick={this.addPost}>Post</button>
        </div>
    </div>
);

export default PostEditor;
        
        
        
        
        
        
