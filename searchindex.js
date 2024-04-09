Search.setIndex({"docnames": ["functions/architecture_design/Software_Architecture/Business_Modeling/Business_Modeling", "functions/architecture_design/Software_Architecture/Business_Modeling/Domain_Driven_Design/Domain_Driven_Design", "functions/architecture_design/Software_Architecture/Business_Modeling/Event_Driven_Design/Event_Driven_Design", "functions/architecture_design/Software_Architecture/Technical_Selection/Technical_Selection", "functions/architecture_design/Software_Architecture/Technical_Selection/users_side_selection/users_side_selection", "functions/architecture_design/Software_Architecture/Technical_Selection/web_side_selection/web_side_selection", "functions/architecture_design/Software_Architecture/software_architecture", "functions/architecture_design/architecture_design", "functions/client_side_development/client_side_development", "functions/interactive_design/Interactive_Design", "functions/product_planning/product_planning", "functions/project_management/process_for_validating_engineering_standards/process_for_validating_engineering_standards", "functions/project_management/project_management", "functions/project_management/quality_assurance/quality_assurance", "functions/server_side_development/server_side_development", "functions/technical_writing/technical_writing", "index", "interactive_works/api/api", "interactive_works/design_language/design_language", "interactive_works/domain_model/domain_model", "interactive_works/product_panorama/product_panorama", "interactive_works/product_panorama/users_story_documents/users_story_documents", "interactive_works/product_panorama/users_story_maps/users_story_maps"], "filenames": ["functions/architecture_design/Software_Architecture/Business_Modeling/Business_Modeling.md", "functions/architecture_design/Software_Architecture/Business_Modeling/Domain_Driven_Design/Domain_Driven_Design.md", "functions/architecture_design/Software_Architecture/Business_Modeling/Event_Driven_Design/Event_Driven_Design.md", "functions/architecture_design/Software_Architecture/Technical_Selection/Technical_Selection.md", "functions/architecture_design/Software_Architecture/Technical_Selection/users_side_selection/users_side_selection.md", "functions/architecture_design/Software_Architecture/Technical_Selection/web_side_selection/web_side_selection.md", "functions/architecture_design/Software_Architecture/software_architecture.md", "functions/architecture_design/architecture_design.md", "functions/client_side_development/client_side_development.md", "functions/interactive_design/Interactive_Design.md", "functions/product_planning/product_planning.md", "functions/project_management/process_for_validating_engineering_standards/process_for_validating_engineering_standards.md", "functions/project_management/project_management.md", "functions/project_management/quality_assurance/quality_assurance.md", "functions/server_side_development/server_side_development.md", "functions/technical_writing/technical_writing.md", "index.md", "interactive_works/api/api.md", "interactive_works/design_language/design_language.md", "interactive_works/domain_model/domain_model.md", "interactive_works/product_panorama/product_panorama.md", "interactive_works/product_panorama/users_story_documents/users_story_documents.md", "interactive_works/product_panorama/users_story_maps/users_story_maps.md"], "titles": ["\u4e1a\u52a1\u5efa\u6a21", "\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1", "\u4e8b\u4ef6\u9a71\u52a8\u8bbe\u8ba1", "\u6280\u672f\u9009\u578b", "\u5ba2\u6237\u7aef\u9009\u578b", "Web\u7aef\u9009\u578b", "\u8f6f\u4ef6\u67b6\u6784", "\u67b6\u6784\u8bbe\u8ba1", "\u5ba2\u6237\u7aef\u5f00\u53d1", "\u4ea4\u4e92\u8bbe\u8ba1", "\u4ea7\u54c1\u7b56\u5212", "\u9a8c\u8bc1\u5de5\u7a0b\u6807\u51c6\u7684\u6d41\u7a0b", "\u9879\u76ee\u7ba1\u7406", "\u5ba1\u6838\u76d1\u7ba1", "\u670d\u52a1\u7aef\u5f00\u53d1", "\u6280\u672f\u5199\u4f5c", "\u91cf\u6f6e\u4ea7\u54c1\u7814\u53d1\u624b\u518c", "API", "\u8bbe\u8ba1\u8bed\u8a00", "\u9886\u57df\u6a21\u578b", "\u4ea7\u54c1\u5168\u666f\u56fe", "\u7528\u6237\u6545\u4e8b\u6587\u6863", "\u7528\u6237\u6587\u6863\u5730\u56fe"], "terms": {"\u4e3b\u8981\u6709\u4e24\u79cd\u8303\u5f0f": 1, "\u4f20\u7edf\u65b9\u5f0f\u56f4\u7ed5\u9886\u57df\u6a21\u578b": 1, "\u73b0\u4ee3\u65b9\u5f0f\u56f4\u7ed5\u4e0a\u4e0b\u6587": 1, "strateg": 2, "driven": 2, "model": 2, "\u524d\u8005\u5bf9\u4e8b\u4ef6\u98ce\u66b4": 2, "\u8bbe\u8ba1": 2, "\u548c\u4e8b\u4ef6\u6eaf\u6e90": 2, "\u5b9e\u73b0": [2, 11], "\u6bd4\u8f83\u53cb\u597d": 2, "\u540e\u8005\u5bf9\u5de5\u7a0b\u6807\u51c6\u6bd4\u8f83\u53cb\u597d": 2, "\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6539\u8fdb\u5de5\u7a0b\u6807\u51c6": 2, "\u4ee5\u4e00\u4e2aaggregate\u4e3a\u5355\u4f4d": 2, "\u9886\u57df\u6a21\u578b\u540e\u9762\u4ecb\u7ecd\u9886\u57df\u4e8b\u4ef6\u548capi": 2, "1": 4, "\u6839\u636e\u4ec0\u4e48\u7aef\u548c\u56e2\u961f\u60c5\u51b5\u51b3\u5b9a\u662f\u4e0d\u662f\u7528\u8de8\u7aef\u6846\u67b6": 4, "2": 4, "\u6839\u636e\u7aef\u9009\u62e9\u5177\u4f53\u7684\u57fa\u7840\u6846\u67b6\u548c\u5e93": 4, "\u57fa\u7840": 5, "vite": 5, "web\u6846\u67b6": 5, "react": 5, "vue": 5, "taiwaidcss": 5, "flowbit": 5, "\u6211\u76ee\u524d\u6478\u7d22\u51fa\u6765\u7684\u7ecf\u9a8c\u662f": 9, "\u4ea7\u54c1\u5148\u753b\u4e00\u8f6e\u4f4e\u4fdd\u771f": 9, "\u524d\u7aef\u62c9\u4e2ademo": 9, "\u7136\u540e\u8bbe\u8ba1\u505a\u51e0\u8f6e\u9ad8\u4fdd\u771f": 9, "\u524d\u7aef\u518d\u6539\u51e0\u8f6e": 9, "\u6211\u4e00\u5f00\u59cb\u8ba9\u4ed6\u4eec\u5148\u7528\u7eb8\u7b14\u753b": 9, "\u901a\u8fc7\u4ee5\u540e\u518d\u4e0afigma\u753b\u4e2a\u521d\u7a3f": 9, "\u8fed\u4ee3\u4ee5\u540e\u518d\u53cd\u590d\u6539": 9, "\u7136\u540e\u5230flutter\u8fd9\u4e2a\u9636\u6bb5": 9, "\u5c31\u53ef\u4ee5\u76f4\u63a5\u5f00\u4e2adebug": 9, "\u73b0\u573a\u6539\u4e86": 9, "\u6240\u4ee5\u6211\u6bd4\u8f83\u559c\u6b22flutter": 9, "\u540e\u671f\u8fed\u4ee3\u6548\u7387\u7279\u522b\u9ad8": 9, "\u56e0\u4e3a\u6211\u4eec\u8bbe\u8ba1\u6c34\u5e73\u4e0d\u884c": 9, "\u4e00\u8f6e\u8bbe\u8ba1\u4e0d\u5230\u4f4d": 9, "\u6b23\u6b23": 9, "comment": 9, "\u6211\u4e4b\u524d\u53bb\u627e\u5927\u5382\u7684\u8bbe\u8ba1\u5e08\u5408\u4f5c\u81ea\u5df1\u7684\u9879\u76ee": 9, "\u7136\u540e\u4ed6\u4eec\u6709\u4e9b\u4eba\u5c31\u662f\u5b8c\u5168\u4e0d\u4e60\u60ef\u7528\u7eb8\u548c\u7b14": 9, "\u5c31\u5f88\u5947\u602a": 9, "\u4ed6\u4eec\u4e00\u4e0a\u6765\u5c31\u5f97\u98de": 9, "\u5e72\u561b": 9, "\u90a3\u6211\u5c31\u8ddf\u4ed6\u8bb2\u4e86": 9, "\u6211\u8bf4": 9, "\u5f88\u591a\u4e1c\u897f\u5bf9\u5427": 9, "\u6211\u4eec\u662f\u8981\u5feb\u901f\u8fed\u4ee3\u7684": 9, "\u6211\u4e0d\u9700\u8981\u505a\u975e\u5e38\u597d\u770b\u7684\u8fd9\u79cd\u6587\u6863\u6216\u8005\u600e\u4e48\u6837": 9, "\u6211\u7684\u8fd9\u4e2a\u76ee\u6807\u5f88\u76f4\u63a5": 9, "\u5c31\u662f\u4eca\u5929\u54b1\u7528\u6700\u5feb\u7684\u901f\u5ea6\u628a\u8fd9\u4e2a\u4e1c\u897f\u7ed9\u5b8c\u6210\u6389": 9, "\u6982\u8ff0": 11, "\u5b9e\u9645\u9700\u8981\u5927\u91cf\u7684\u65f6\u95f4": 11, "\u6700\u540e\u8fd8\u53ef\u80fd\u767d\u505a": 11, "\u5c31\u5e0c\u671b\u5de5\u7a0b\u6807\u51c6\u8bbe\u8ba1\u6e05\u695a\u4e86\u518d\u505a": 11, "\u4f46\u662f\u53c8\u8bbe\u8ba1\u4e0d\u6e05\u695a": 11, "\u6240\u4ee5\u8bbe\u8ba1\u4e00\u6bb5\u5b9e\u73b0\u4e00\u6bb5\u6bd4\u8f83\u5408\u9002": 11, "\u5148\u5b9e\u73b0\u4e00\u4e2a\u524d\u7aefsdk\u6216\u8005\u540e\u7aefsdk\u7684demo": 11, "\u524d\u7aef\u7684\u590d\u6742\u5728\u4e8e\u5199bloc\u67b6\u6784": 11, "\u8fd9\u4e2a\u53ef\u4ee5\u7b80\u5355\u901a\u8fc7\u9759\u6001\u6570\u636e\u6765\u7701\u7565": 11, "\u66f4\u9002\u5408\u9a8c\u8bc1\u4ea7\u54c1\u5f62\u6001": 11, "\u540e\u7aef\u7684\u590d\u6742\u5728\u4e8e\u5199\u6570\u636e\u5e93": 11, "\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5199\u9759\u6001\u6570\u636e\u5b9e\u73b0": 11, "\u66f4\u9002\u5408\u9a8c\u8bc1\u590d\u6742\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1": 11, "\u9ed8\u8ba4\u4f7f\u7528\u654f\u6377\u7ba1\u7406": 12, "\u4e3b\u9898\u662f\u8003\u8651\u653f\u5e9c\u548c\u5e73\u53f0\u76d1\u7ba1\u653f\u7b56\u5bf9\u4ea7\u54c1\u7814\u53d1\u6d41\u7a0b\u7684\u5f71\u54cd": 13, "\u6211\u4eec\u5bf9\u56fd\u5185\u7684\u4e0a\u67b6\u7ba1\u7406\u60c5\u51b5\u4e0d\u592a\u6e05\u695a": 13, "\u56e0\u6b64\u4e0d\u786e\u5b9a\u7528\u4e00\u4e2a\u57df\u540d\u8fd8\u662f\u591a\u4e2a\u57df\u540d\u4e0a\u7ebf\u4e91\u670d\u52a1\u6bd4\u8f83\u5408\u9002": 13, "\u4e0d\u8fc7\u7531\u4e8e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u662f\u4e00\u5957\u4ee3\u7801": 13, "\u901a\u8fc7\u7279\u6027\u5f00\u5173\u63a7\u5236\u5c31\u53ef\u4ee5": 13, "\u6240\u4ee5\u6700\u574f\u7684\u7ed3\u679c\u4e0d\u8fc7\u662f\u589e\u52a0\u66f4\u591a\u7684\u5f00\u5173": 13, "\u5e76\u4e14\u5728\u90e8\u7f72\u73af\u8282\u4e0d\u65ad\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u7b56\u7565": 13, "\u6b22\u8fce\u6765\u5230": 16, "\u6211\u7684\u6d41\u7a0b\u91cc\u6709\u4e2a\u57fa\u672c\u5047\u8bbe\u662f\u6240\u6709\u7684\u4ea7\u51fa\u90fd\u53ef\u4ee5\u6301\u7eed\u4ea4\u4ed8": 16, "\u4e3b\u8981\u662f\u8003\u8651\u56e2\u961f\u6d41\u52a8\u6027\u5927": 16, "\u6c34\u5e73\u4f4e": 16, "\u65b9\u4fbf\u76d1\u7ba1\u5230\u6bcf\u4e2a\u7ec6\u8282": 16, "\u804c\u80fd": 16, "\u5927\u4f53\u6309\u7167\u7011\u5e03\u6d41\u7a0b\u4e0b\u804c\u80fd\u53d1\u6325\u4f5c\u7528\u7684\u987a\u5e8f\u6392\u5217": 16, "\u6ca1\u6709\u56fa\u5b9a\u7684\u6807\u51c6\u6d41\u7a0b": 16, "\u6839\u636e\u5b9e\u9645\u6761\u4ef6\u4e34\u673a\u5e94\u53d8": 16, "\u56e0\u6b64\u9700\u8981\u9879\u76ee\u7ba1\u7406\u804c\u80fd\u53d1\u6325\u7a33\u5b9a\u7684\u4f5c\u7528": 16, "\u53ef\u4ee5\u6839\u636e\u9700\u8981\u628a\u975e\u6b63\u5f0f\u7684\u5199\u6210\u6b63\u5f0f\u7684": 21, "\u4ee3\u66ff\u4f20\u7edfprd": 21, "\u4ea4\u8c08\u5728\u5199\u4e4b\u524d\u4e4b\u540e\u90fd\u53ef\u4ee5\u6709": 21, "\u4ee5\u95ee\u7b54\u7684\u5f62\u5f0f\u6574\u7406": 21, "\u6216\u8005\u6574\u7406\u5230\u6b63\u6587\u91cc": 21, "\u683c\u5f0f": 21, "http": 21, "www": 21, "youtub": 21, "com": 21, "watch": 21, "v": 21, "7hogqhb6qa": 21, "ai\u8f85\u52a9": 21, "ly0dsqr3ysg": 21, "\u8ba1\u5212\u62d3\u5c55\u6807\u51c6\u65b9\u6cd5\u4ee5\u9002\u5e94b\u7aef\u9700\u6c42": 22, "\u4fdd\u7559\u5168\u666f\u56fe\u4f5c\u7528": 22, "\u540c\u65f6\u8fdb\u4e00\u6b65\u89c4\u8303\u7528\u6237\u6545\u4e8b\u7684\u4f7f\u7528\u65b9\u5f0f": 22}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"\u4e1a\u52a1\u5efa\u6a21": 0, "\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1": 1, "\u4e8b\u4ef6\u9a71\u52a8\u8bbe\u8ba1": 2, "\u6280\u672f\u9009\u578b": 3, "\u5ba2\u6237\u7aef\u9009\u578b": 4, "web\u7aef\u9009\u578b": 5, "\u8f6f\u4ef6\u67b6\u6784": 6, "\u67b6\u6784\u8bbe\u8ba1": 7, "\u5ba2\u6237\u7aef\u5f00\u53d1": 8, "\u4ea4\u4e92\u8bbe\u8ba1": 9, "\u4ea7\u54c1\u7b56\u5212": 10, "\u9a8c\u8bc1\u5de5\u7a0b\u6807\u51c6\u7684\u6d41\u7a0b": 11, "\u9879\u76ee\u7ba1\u7406": 12, "\u5ba1\u6838\u76d1\u7ba1": 13, "\u670d\u52a1\u7aef\u5f00\u53d1": 14, "\u6280\u672f\u5199\u4f5c": 15, "\u91cf\u6f6e\u4ea7\u54c1\u7814\u53d1\u624b\u518c": 16, "\u7b80\u4ecb": 16, "api": 17, "\u8bbe\u8ba1\u8bed\u8a00": 18, "\u9886\u57df\u6a21\u578b": 19, "\u4ea7\u54c1\u5168\u666f\u56fe": 20, "\u7528\u6237\u6545\u4e8b\u6587\u6863": 21, "\u7528\u6237\u6587\u6863\u5730\u56fe": 22}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"\u4e1a\u52a1\u5efa\u6a21": [[0, "id1"]], "\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1": [[1, "id1"]], "\u4e8b\u4ef6\u9a71\u52a8\u8bbe\u8ba1": [[2, "id1"]], "\u6280\u672f\u9009\u578b": [[3, "id1"]], "\u5ba2\u6237\u7aef\u9009\u578b": [[4, "id1"]], "Web\u7aef\u9009\u578b": [[5, "web"]], "\u8f6f\u4ef6\u67b6\u6784": [[6, "id1"]], "\u67b6\u6784\u8bbe\u8ba1": [[7, "id1"]], "\u5ba2\u6237\u7aef\u5f00\u53d1": [[8, "id1"]], "\u4ea4\u4e92\u8bbe\u8ba1": [[9, "id1"]], "\u4ea7\u54c1\u7b56\u5212": [[10, "id1"]], "\u9a8c\u8bc1\u5de5\u7a0b\u6807\u51c6\u7684\u6d41\u7a0b": [[11, "id1"]], "\u9879\u76ee\u7ba1\u7406": [[12, "id1"]], "\u5ba1\u6838\u76d1\u7ba1": [[13, "id1"]], "\u670d\u52a1\u7aef\u5f00\u53d1": [[14, "id1"]], "\u6280\u672f\u5199\u4f5c": [[15, "id1"]], "\u91cf\u6f6e\u4ea7\u54c1\u7814\u53d1\u624b\u518c": [[16, "id1"]], "\u7b80\u4ecb": [[16, "id2"]], "API": [[17, "api"]], "\u8bbe\u8ba1\u8bed\u8a00": [[18, "id1"]], "\u9886\u57df\u6a21\u578b": [[19, "id1"]], "\u4ea7\u54c1\u5168\u666f\u56fe": [[20, "id1"]], "\u7528\u6237\u6545\u4e8b\u6587\u6863": [[21, "id1"]], "\u7528\u6237\u6587\u6863\u5730\u56fe": [[22, "id1"]]}, "indexentries": {}})