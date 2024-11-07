## Installation

Clone this repo, then install using `pip`.  You'll probably want to create a virtual env.

```bash
git clone https://github.com/karthikmudunuri/eldoraai
cd eldoraai/backend
pip install .
```

## Usage

You must set the `OPENAI_API_KEY` even if you just want to try Ollama models.  Just set it to `xxx` in that case like below.

```bash
OPENAI_API_KEY=xxx python -m openui
```

## Development

First be sure to install the package as editable, then passing `--dev` as an argument will live reload any local changes.

```bash
pip install -e .
python -m openui --dev
```

Now install the dependencies and test dependencies:

```bash
pip install -e '.[test]'
```

To run the tests:

```bash
pytest
```

## Evaluation

The [eval](./openui/eval) folder contains scripts for evaluating the performance of a model.  It automates generating UI, taking screenshots of the UI, then asking `gpt-4-vision-preview` to rate the elements.  More details about the eval pipeline coming soon...
