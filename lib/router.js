FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        main: 'home'
    });
  }
});

FlowRouter.route('/question', {
  name: 'question',
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        main: 'question'
    });
  }
});

FlowRouter.route('/result', {
  name: 'result',
  triggersEnter: [showResult],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        main: 'result'
    });
  }
});

function showResult(context) {
  if (Meteor.isClient) {
    if (!_.isUndefined(Session.get('answeredQuestions'))) {
      if (Session.get('answeredQuestions').length < 15) {
        FlowRouter.go('/');
      }
    } else {
      FlowRouter.go('')
    }
  }
}