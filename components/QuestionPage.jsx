const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

function QuestionPage() {
  return (
    <Layout>
      <QuestionCard></QuestionCard>
    </Layout>
  );
}

module.exports = QuestionPage;
