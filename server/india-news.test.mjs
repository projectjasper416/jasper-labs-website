import test from 'node:test';
import assert from 'node:assert/strict';
import { selectIndiaItems, assessSmallBusinessRelevance } from './india-news.mjs';
const now = Date.parse('2026-09-15T12:00:00Z');
const item = (title, contentSnippet = '', id = 'story', date = '2026-09-15T02:00:00Z') => ({ title, contentSnippet, link:`https://cio.economictimes.indiatimes.com/news/${id}`, isoDate:date });

// Synthetic metadata fixtures; these are not asserted to be real published stories.
test('accepts practical India SME AI and non-AI technology adoption', () => {
  for (const fixture of [
    item('How Indian MSMEs use AI to reduce inventory costs'),
    item('Indian entrepreneurs automate invoicing to save time'),
    item('How small businesses in India use cloud ERP to manage orders'),
    item('Indian kiranas use digital payments to grow sales'),
    item('Indian SMEs use cloud software to manage stock and grow sales'),
    item('A practical guide to cloud software','In India, small manufacturers are using cloud software to improve workflows.'),
    item('Digital tools for Indian founders','A checklist explains how entrepreneurs can use CRM to improve lead generation.'),
    item('New rules for digital payments in India','A step-by-step guide shows small businesses how to set up UPI billing to reduce errors.'),
    item('A startup launches AI software in India','A case study shows small retailers using the software to reduce inventory waste.')
  ]) assert.equal(assessSmallBusinessRelevance(fixture).eligible,true,fixture.title);
});

test('rejects broad AI/policy, enterprise deals, finance and unrelated consumer coverage', () => {
  for (const fixture of [
    item('Indian companies seek legal clarity on AI liability','Businesses examine contracts for autonomous systems.'),
    item('AI and automation reshape Indian bank hiring','Automation helps banks expand operations.'),
    item('HCLTech and CrowdStrike expand AI partnership','Indian enterprises use AI to scale operations.'),
    item('Indian startup raises funding for AI expansion','Small businesses use its AI to improve sales.'),
    item('Indian software shares surge on AI growth','SMEs use software to grow revenue.'),
    item('Indian startup unveils a new AI model','The model promises to help entrepreneurs scale sales.'),
    item('Indian SMEs and the AI opportunity','AI could help small businesses scale operations.'),
    item('New AI laptops launch in India','Small businesses and consumers are expected to adopt the gadgets to improve productivity.'),
    item('How American small businesses use AI to grow sales'),
    item('Indian startups react to AI regulation','Large enterprises use cloud software to improve operations.'),
    item('How technology is rewiring India’s express cargo industry','Indian firms integrate AI into cargo handling processes.'),
    item('How Indian entrepreneurs grow sales','A founder explains customer service techniques with no software tools.'),
    item('How AI will transform growth for Indian startups'),
    item('Indian entrepreneurs plan new technology','Small businesses in India plan to use AI to grow sales.'),
    item('Indian startup raises $20 million','Indian SMEs use its software to grow sales.'),
    item('AI in India'), item(''), {title:null,description:null}
  ]) assert.equal(assessSmallBusinessRelevance(fixture).eligible,false,fixture.title);
});

test('does not join unrelated summary sentences into an adoption story', () => {
  const result = assessSmallBusinessRelevance(item('Technology update from India','Small businesses attended the event. Large banks use AI to improve operations.'));
  assert.equal(result.eligible,false);
  assert.equal(result.reason,'insufficient-practical-adoption-metadata');
});

test('uses normalized RSS description, strips markup and decodes entities', () => {
  const fixture = item('India&#039;s MSMEs improve operations');
  fixture.description = '<p>Small businesses are using <b>cloud ERP</b> to reduce costs &amp; manage inventory.</p>';
  assert.equal(assessSmallBusinessRelevance(fixture).eligible,true);
  assert.equal(selectIndiaItems([fixture],now)[0].title,"India's MSMEs improve operations");
});

test('preserves safe origins, date bounds and duplicate filtering', () => {
  const valid = item('How Indian SMEs use AI to grow sales');
  assert.equal(selectIndiaItems([
    {...valid,link:'javascript:alert(1)'}, {...valid,link:'http://cio.economictimes.indiatimes.com/news/x'},
    {...valid,link:'https://example.com/news'}, {...valid,link:'https://user:pass@cio.economictimes.indiatimes.com/news/x'},
    {...valid,isoDate:'2026-01-01'}, {...valid,isoDate:'2027-01-01'}, {...valid,isoDate:'invalid'},
    valid,valid,{...valid,link:valid.link+'#section'}
  ],now).length,1);
});

test('sorts qualified stories newest first, caps at three and never pads', () => {
  const fixtures=[1,2,3,4].map(n=>item(`How Indian SMEs use cloud software to grow sales ${n}`,'',n,`2026-09-1${n}T02:00:00Z`));
  const result=selectIndiaItems(fixtures,now);
  assert.equal(result.length,3); assert.equal(result[0].title,fixtures[3].title); assert.equal(result[0].source,'ET CIO');
  assert.equal(selectIndiaItems([fixtures[0],item('India AI news')],now).length,1);
  assert.deepEqual(selectIndiaItems([item('India AI news')],now),[]);
});
