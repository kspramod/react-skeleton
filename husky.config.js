module.exports = {
  hooks: {
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
    'commit-msg': 'cz-customizable-ghooks',
    'pre-commit': 'npm-run-all -p precommit:verify',
    'pre-push': 'npm-run-all -p prepush:verify',
  },
};
