/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height color-prism">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl}>
                GitHub
              </a>
            )}
            {twitterUrl && (
              <a className="button button--secondary" href={twitterUrl}>
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol name="Xzntrc" githubUrl="https://github.com/xzntrc">
        <Translate id="team.profile.Xzntrc.body">
          Founder & Main Editor of TempleOS Docs, HolyC tinkerer and explorer! I
          love to document my journey in discovering all that there is to
          TempleOS.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Nrootconauto"
        githubUrl="https://github.com/nrootconauto"
      >
        <Translate id="team.profile.nrootconauto.body">
          Creator of 3Days; A HolyC compiler for Linux and Windows. Full-time
          compiler genius. Greatly contributed to the development of the HolyC
          Docs.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Tudor Hutu"
        githubUrl="https://github.com/hututudor"
      >
        <Translate id="team.profile.hututudor.body">
          Fan of Terry's work and TempleOS. Contributes with knowledge about
          Docusaurus.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}
